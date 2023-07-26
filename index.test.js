import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";

const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");

let dom;
let document;
let window;

describe("CSS implimentation", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
  });

  test("article title should be of crimson color and the font weight should be bolder and center it without using center tag", () => {
    const articleTitle = document.querySelector(".article-title h1");
   
      const styles = window.getComputedStyle(articleTitle);
      expect(styles.color).toMatch(/crimson/i);
      expect(styles.fontWeight).toMatch(/bolder/i)
      expect(styles.textAlign).toMatch(/center/i)
    
  });
  test("article description should be of blueviolet color and the should be center without center tag", () => {
    const articleDescription = document.querySelector(".article-description h3");
   
      const styles = window.getComputedStyle(articleDescription);
      expect(styles.color).toMatch(/blueviolet/i);
      expect(styles.textAlign).toMatch(/center/i)
    
  });
 test("article-img-container should have the width exactly 50% of the screen",()=>{
    const articleImgContainer= document.querySelector(".article-img-container")

    const styles=window.getComputedStyle(articleImgContainer);
    expect(styles.width).toMatch(/50%/i)

 })

 test("article-content width should be exactly 80% of the screen, should have a border of 1px, should have a padding of 0.5rem, and have a bg color of lightsalmon",()=>{
  const articleContent=document.querySelector(".article-content")
  const styles=window.getComputedStyle(articleContent)
  expect(styles.width).toMatch(/80%/i)
  expect(styles.border).toMatch(/1px/i)
  expect(styles.padding).toMatch(/0.5rem/i)
  expect(styles.backgroundColor).toMatch(/lightsalmon/i)
 })
  
  
  
});
