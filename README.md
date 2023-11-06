# figma-tokens

Figma intial setup:

1. Figma access key:
   ![Create a figma access key](https://miro.medium.com/v2/resize%253Afit%253A1400/format%253Awebp/1%252AAoF3fFweyGMyh_24dITAGw.png)
1. A new figma file

1. Copy the file's key
   ![Alt text](https://miro.medium.com/v2/resize%253Afit%253A1400/format%253Awebp/1%252AfOIBQMb4xwAPw0sGjw4Opg.png)
   > The file key is in bold, https://www.figma.com/file/**XXXxxxXxxXxx0xX0XX0XXX**/Tokens?type=design&node-id=0%3A1&mode=design&t=jRXFjAaKX09yFC4I-1

## Intergrating with the REST API

In order to integrate with Figma's REST API into our Design Token system, we had to do a couple of things

1. Create basic API call structure
1. Read our tokens
1. Understand the POST format
1. Create the "Themes" collection
1. Capture and store variables IDs

## 1. Create basic API call
