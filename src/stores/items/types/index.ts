type Item = { id: number; name: string };

interface itemShoes extends Item {
  selected?: boolean;
}
interface itemJacket extends Item {
  selected?: boolean;
}
interface itemsState {
  shoes: itemShoes[] | null;
  jackets: itemJacket[] | null;
  shoesSelected: itemShoes[];
  jacketSelected: itemJacket | null;
}

export type { itemShoes, itemJacket, itemsState };
