import { defineStore } from 'pinia';
import type { itemJacket, itemShoes, itemsState } from '@/stores/items/types';
import JSON_SHOES from '@/stores/items/jsons/shoes.json';
import JSON_JACKETS from '@/stores/items/jsons/jackets.json';

export const useItemsStore = defineStore('useItems', {
  state: (): itemsState => ({
    shoes: null,
    shoesSelected: [],
    jackets: null,
    jacketSelected: null,
  }),
  actions: {
    async getShoes() {
      this.shoes = JSON_SHOES;
    },
    async getJackets() {
      this.jackets = JSON_JACKETS;
    },
    toggleShoes(item: itemShoes) {
      if (this.shoesSelected.some((shoe) => shoe.id === item.id)) {
        this.shoesSelected = this.shoesSelected.filter((shoe) => shoe.id !== item.id);
      } else {
        if (this.disabledShoes) return;
        this.shoesSelected.push(item);
      }
      this.selectedShoes();
    },
    toggleJacket(item: itemJacket) {
      if (this.jacketSelected !== null && this.jacketSelected.id === item.id) {
        this.jacketSelected = null;
      } else {
        this.jacketSelected = item;
      }
      this.selectedJackets(item);
    },
    selectedJackets(item: itemJacket) {
      this.jackets?.map((jacket) => {
        if (this.jacketSelected === null) {
          jacket.selected = false;
        } else {
          jacket.selected = jacket.id === item.id;
        }
      });
    },
    selectedShoes() {
      this.shoes?.map((shoe) => {
        shoe.selected = false;
        this.shoesSelected.map((selected) => {
          if (shoe.id === selected.id) shoe.selected = true;
        });
      });
    },
  },
  getters: {
    disabledShoes: (state) => state.shoesSelected.length >= 6,
  },
});
