const SCORE_TAG_POSSIBLILITIES = {
  "P+": 'Strong Positive',
  "P": 'Positive',
  "NEU": 'Neutral',
  "N": 'Negative',
  "N+": 'strong Negative',
  "NONE": 'Without Sentiment',
}

const URL_VALID_REGEX = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

const validateUrl = (url) => {
  let isValidUrl = false;

  if(!url) {
    return isValidUrl;
  }

  isValidUrl = URL_VALID_REGEX.test(url);

  return isValidUrl;
}

const getFormattedData = (data) => {
  return {
    scoreTag: getElementValue(SCORE_TAG_POSSIBLILITIES[data.score_tag]),
    agreement: getElementValue(data.agreement.toLowerCase()),
    subjectivity: getElementValue(data.subjectivity.toLowerCase()),
    confidence: getElementValue(`${data.confidence}%`),
    irony: getElementValue(data.irony === "NONIRONIC" ? 'non ironic' : 'ironic')
  }
}

const getElementValue = (value) => {
  return`<span class="sentiment-value">${value}.</span>`;
}

export {validateUrl, getFormattedData}