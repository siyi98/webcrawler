const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const util = require('util');
const url = require('url');


let getNewsList = (done) => {
    let news = new Array();
    request('http://www.cnblogs.com', (err, res, data) => {
        if (err) {
            return console.error(err);
        } else {
            const $ = cheerio.load(data);
            let navText = $('.post_nav_block').html()
            console.log(navText);
        }
    })
}
getNewsList()