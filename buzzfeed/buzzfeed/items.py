# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class BuzzfeedItem(scrapy.Item):
    title = scrapy.Field()
    description = scrapy.Field()
    link = scrapy.Field()
    body = scrapy.Field()
    pass
