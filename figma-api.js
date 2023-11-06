import axios from 'axios'
import * as dotenv from 'dotenv'
dotenv.config()

const fileKey = process.env.fileKey
const figmaAccessToken = process.env.figmaAccessToken
const postData = ''

axios
  .post(`https://api.figma.com/v1/files/${fileKey}/variables`, postData, {
    headers: {
      'X-Figma-Token': figmaAccessToken,
    },
  })
  .then(function (response) {
    // what to do next
  })
  .catch(function (error) {
    // log any errors
    console.log(error)
  })
  .finally(function () {
    // always do this
  })
