describe('Gilded Rose', function() {
  beforeEach(function() {
    // Clear items and reinitialize
    items.length = 0;
    items.push(new Item('+5 Dexterity Vest', 10, 20));
    items.push(new Item('Aged Brie', 2, 0));
    items.push(new Item('Elixir of the Mongoose', 5, 7));
    items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
    items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
    items.push(new Item('Conjured Mana Cake', 3, 6));
  });

  it('should update quality and sell_in correctly for Normal Item', function() {
    update_quality();
    expect(items[0].sell_in).toBe(9);
    expect(items[0].quality).toBe(19);
  });

  it('should update quality and sell_in correctly for Aged Brie', function() {
    update_quality();
    expect(items[1].sell_in).toBe(1);
    expect(items[1].quality).toBe(1);
  });

  it('should update quality and sell_in correctly for Backstage Pass', function() {
    update_quality();
    expect(items[4].sell_in).toBe(14);
    expect(items[4].quality).toBe(21);
  });

  it('should not change quality and sell_in for Sulfuras', function() {
    update_quality();
    expect(items[3].sell_in).toBe(0);
    expect(items[3].quality).toBe(80);
  });

  it('should update quality and sell_in correctly for Conjured Item', function() {
    update_quality();
    expect(items[5].sell_in).toBe(2);
    expect(items[5].quality).toBe(4);
  });

  it('should handle the edge case for Backstage Pass when sell_in is 10 or less', function() {
    items[4].sell_in = 10;
    update_quality();
    expect(items[4].sell_in).toBe(9);
    expect(items[4].quality).toBe(22);
  });

  it('should handle the edge case for Backstage Pass when sell_in is 5 or less', function() {
    items[4].sell_in = 5;
    update_quality();
    expect(items[4].sell_in).toBe(4);
    expect(items[4].quality).toBe(23);
  });

  it('should return the correct quality for Aged Brie after sell_in date has passed', function() {
    items[1].sell_in = 0;
    update_quality();
    expect(items[1].sell_in).toBe(-1);
    expect(items[1].quality).toBe(2);
  });

  it('should degrade quality twice as fast after sell_in date for Normal Item', function() {
    items[0].sell_in = 0;
    update_quality();
    expect(items[0].sell_in).toBe(-1);
    expect(items[0].quality).toBe(18);
  });

  it('should not degrade quality below 0 for Normal Item', function() {
    items[0].sell_in = 0;
    items[0].quality = 0;
    update_quality();
    expect(items[0].sell_in).toBe(-1);
    expect(items[0].quality).toBe(0);
  });

  it('should not increase quality above 50 for Aged Brie', function() {
    items[1].quality = 50;
    update_quality();
    expect(items[1].sell_in).toBe(1);
    expect(items[1].quality).toBe(50);
  });

  it('should drop quality to 0 for Backstage Pass after concert', function() {
    items[4].sell_in = 0;
    update_quality();
    expect(items[4].sell_in).toBe(-1);
    expect(items[4].quality).toBe(0);
  });

  it('should degrade quality twice as fast after sell_in date for Conjured Item', function() {
    items[5].sell_in = 0;
    update_quality();
    expect(items[5].sell_in).toBe(-1);
    expect(items[5].quality).toBe(2);
  });

  it('should not degrade quality below 0 for Conjured Item', function() {
    items[5].sell_in = 0;
    items[5].quality = 0;
    update_quality();
    expect(items[5].sell_in).toBe(-1);
    expect(items[5].quality).toBe(0);
  });
});
