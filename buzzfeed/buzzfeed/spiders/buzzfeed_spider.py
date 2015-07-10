import scrapy  

from buzzfeed.items import BuzzfeedItem

class BuzzfeedSpider(scrapy.Spider) 
  name = 'Buzzfeed'
  allowed_domains = [
    'http://www.buzzfeed.com/news'
  ]

  def parse_newspage(self, response):
    for href in response.xpath('//*[@class="slab"]/a/@href')
      url = response.urljoin(href.extract())
      yield scrapy.Request(url, callback=self.parse_article)

  def parse_article(self, response):
    item = BuzzfeedItem()
    