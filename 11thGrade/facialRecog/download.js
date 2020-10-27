const puppeteer = require('puppeteer');
let instaUrl = 'https://www.instagram.com/pharell/';
(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 926 });
    await page.goto(instaUrl);
    let pageData = await page.evaluate(() => {
    let imgs = [];
    let soloImg = document.querySelector('KL4Bh');
    let imgElms = document.querySelectorAll('KL4Bh');
    imgElms.forEach((element) => {
        function imgs(){
            const labeledImg = ['Pharell']
            return Promise.all(
            labels.map(async label => {
            const descriptions = []
            for (let i = 1; i <= 2; i++) {
            // const img = await faceapi.fetchImage(`labeled_images/${label}/${i}.jpg`);
            const img = await faceapi.fetchImage(soloImg.srcset);
            const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()
            descriptions.push(detections.descriptor)
      }
      return new faceapi.LabeledFaceDescriptors(label, descriptions);
    })
  )
        }
    })
    });
})();