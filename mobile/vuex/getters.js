// Date 2016-09-06;
// author jianwen;

export function getCount (state) {
  return state.count ;
}

export const getStates = {
  getBrands:function(state){
    return state.brands;
  },
  selectBrand:function(state){
    return state.selected_brand;
  },
  getHotelId:function(state){
    return state.hotelId;
  },
  getDays(state){
    return state.days ;
  },
  getHotelData(state){
    return state.hotelData ;
  },

  getUserSelection(state){
    return state.userSelection ;
  },
};
