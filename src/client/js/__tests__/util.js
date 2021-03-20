import { getFormattedData, validateUrl } from "../util";

const mock_data = {
  score_tag: "P",
  agreement: "agreement",
  subjectivity: "subjectivity",
  confidence: "confidence",
  irony: "irony"
}

describe('Test util func', () => {
  test('validateUrl', () => {
      expect(validateUrl('https://www.google.com.br/')).toBe(true);

      expect(validateUrl('ggwp')).toBe(false);
  })

  test('getFormattedData', () => {
    const {agreement} = getFormattedData(mock_data);

    expect(agreement).toBe('<span class="sentiment-value">agreement.</span>')
  })
});