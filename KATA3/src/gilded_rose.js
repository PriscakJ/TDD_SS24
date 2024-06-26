function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = []

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));

function updateAgedBrie(item) {
  if (item.quality < 50) {
    item.quality = item.quality + 1;
  }
}

function updateBackstagePass(item) {
  if (item.quality < 50) {
    item.quality = item.quality + 1;
    if (item.sell_in < 11) {
      if (item.quality < 50) {
        item.quality = item.quality + 1;
      }
    }
    if (item.sell_in < 6) {
      if (item.quality < 50) {
        item.quality = item.quality + 1;
      }
    }
  }
}

function updateConjuredItem(item) {
  if (item.quality > 0) {
    item.quality = item.quality - 2;
    if (item.quality < 0) {
      item.quality = 0;
    }
  }
}

function updateNormalItem(item) {
  if (item.quality > 0) {
    item.quality = item.quality - 1;
  }
}

function handleExpiredItem(item) {
  if (item.name == 'Aged Brie') {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
    }
  } else if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
    item.quality = 0;
  } else if (item.name.startsWith('Conjured')) {
    if (item.quality > 0) {
      item.quality = item.quality - 2;
      if (item.quality < 0) {
        item.quality = 0;
      }
    }
  } else if (item.quality > 0) {
    if (item.name != 'Sulfuras, Hand of Ragnaros') {
      item.quality = item.quality - 1;
    }
  }
}

function update_quality() {
  for (var i = 0; i < items.length; i++) {
    const item = items[i];
    
    if (item.name == 'Aged Brie') {
      updateAgedBrie(item);
    } else if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
      updateBackstagePass(item);
    } else if (item.name.startsWith('Conjured')) {
      updateConjuredItem(item);
    } else if (item.name != 'Sulfuras, Hand of Ragnaros') {
      updateNormalItem(item);
    }

    if (item.name != 'Sulfuras, Hand of Ragnaros') {
      item.sell_in = item.sell_in - 1;
    }

    if (item.sell_in < 0) {
      handleExpiredItem(item);
    }
  }
}
