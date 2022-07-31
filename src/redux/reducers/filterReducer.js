const intialData = [
  {
    imgSrc:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: "Delhi",
    listingDate: "23-05-2018",
    price: 15000,
    type: "Apartment",
    address: "118,civil lines,India",
    beds: 3,
    bathrooms: 2,
    size: "2x3",
    popular: true,
  },
  {
    imgSrc:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: "Uttarakhand",
    listingDate: "23-03-2018",
    price: 10000,
    type: "Indepandent House",
    address: "128,Dhrawat Village,India",
    beds: 4,
    bathrooms: 2,
    size: "3x5",
    popular: true,
  },
  {
    imgSrc:
      "https://images.pexels.com/photos/32870/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400",
    location: "Delhi",
    listingDate: "23-02-2021",
    price: 26000,
    type: "Villa",
    address: "23,Vasant Vihar, India",
    beds: 5,
    bathrooms: 3,
    size: "8x5",
  },
  {
    imgSrc:
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=400",
    location: "Delhi",
    listingDate: "23-02-2021",
    price: 3000,
    type: "Apartment",
    address: "23,Uttam Nagar, India",
    beds: 1,
    bathrooms: 1,
    size: "2x1",
    popular: true,
  },
  {
    imgSrc:
      "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: "Kerala",
    listingDate: "23-02-2021",
    price: 27600,
    type: "Independent floor",
    address: "23,Kanchi Puram, India",
    beds: 5,
    bathrooms: 4,
    size: "10x4",
    popular: false,
  },

  {
    imgSrc:
      "https://images.pexels.com/photos/1330753/pexels-photo-1330753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: "Agra",
    listingDate: "23-02-2021",
    price: 18200,
    type: "Apartment",
    address: "23,Kanchi Puram, India",
    beds: 3,
    bathrooms: 2,
    size: "2x4",
    popular: true,
  },
];

const filterReducer = (state = intialData, action) => {
  switch (action.type) {
    case "FILTER_DATA":
      const data = action.payload;
      if (data.location && data.type && data.minPrice && data.maxPrice) {
        const filterData = intialData.filter(
          (filteredData) =>
            filteredData.location.includes(data.location) &&
            filteredData.type.includes(data.type) &&
            filteredData.price >= data.minPrice &&
            filteredData.price <= data.maxPrice
        );
        return filterData;
      } else {
        alert("⚠ Filtering Fields Can't Be Empty ");
        return state;
      }
      break;

    default:
      return state;
      break;
  }
};
export default filterReducer;
