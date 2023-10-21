const express = require("express");
const router = express.Router();
const fs = require("fs");
const ejs = require("ejs");
const path = require("path");
const puppeteer = require("puppeteer");
// router = router.use(express.json());

async function exportWebsiteAsPdf(websiteUrl, outputPath) {
  // Create a browser instance
  const browser = await puppeteer.launch({
    headless: "new",
  });
  // Create a new page
  const page = await browser.newPage();
  // Open URL in current page
  await page.goto(websiteUrl, { waitUntil: "networkidle0" });
  // To reflect CSS used for screens instead of print
  await page.emulateMediaType("screen");
  // Download the PDF
  const PDF = await page.pdf({
    path: outputPath,
    margin: { top: "100px", right: "50px", bottom: "100px", left: "50px" },
    printBackground: true,
    format: "A4",
  });
  // Close the browser instance
  await browser.close();
  return PDF;
}

router.get("/", async (req, res) => {
  const url = "http://localhost:8000/pdfCreate";
  await exportWebsiteAsPdf(url, "./public/result.pdf")
  .then(() => {
    console.log("PDF created successfully.");
  })
  .catch((error) => {
    console.error("Error creating PDF:", error);
  });
  res.redirect(url);
  });

module.exports = router;
// router = router.use(express.json());