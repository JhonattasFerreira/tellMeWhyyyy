const urlElement = document.getElementById('url');
const errorMessageElement = document.getElementById('error-message');

const scoreElement = document.getElementById('score');
const agreementElement = document.getElementById('agreement');
const subjectivityElement = document.getElementById('subjectivity');
const confidenceElement = document.getElementById('confidence');
const ironyElement = document.getElementById('irony');

const handleSubmit = (event) => {
  event.preventDefault();
  cleanUi();
  
  const isValidUrl = Client.validateUrl(urlElement.value);

  if(!isValidUrl) {
    renderErrorMessage(`The <span class="url-error-message">URL</span> is Invalid`);
  } else {
    getSentimentAnalysis(urlElement.value)
    .then(data => { updateUi(data) })
    .catch(() => {
      cleanUi();
      renderErrorMessage('It was not possible to analyze the content of this text');
    })
  }
}

const getSentimentAnalysis = async(url) => {
  const data = {
    url
  };

  const response =  await fetch('/postAnalysis', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  try {
    const data = await response.json();
    
    if(data.status.code !== "0") {
      throw new Error(data.status.msg);
    }

    return data;
  } catch(error) {
    console.log('Error => ', error);

    return error;
  }
}

const updateUi = (data) => {
  const {scoreTag, agreement, subjectivity, confidence, irony} = Client.getFormattedData(data);
  
  scoreElement.innerHTML = `The feeling of the text is ${scoreTag}`;
  agreementElement.innerHTML = `The text is in ${agreement}`;
  subjectivityElement.innerHTML = `The text is ${subjectivity}`;
  confidenceElement.innerHTML = `The confidence of the feelings in this text is ${confidence}`;
  ironyElement.innerHTML = `The text is ${irony}`;
}

const renderErrorMessage = (messageError) => {
  errorMessageElement.innerHTML = messageError;
}

const cleanUi = () => {
  urlElement.innerHTML = '';
  errorMessageElement.innerHTML = '';

  scoreElement.innerHTML = '';
  agreementElement.innerHTML = '';
  subjectivityElement.innerHTML = '';
  confidenceElement.innerHTML = '';
  ironyElement.innerHTML = '';
}

export {handleSubmit}