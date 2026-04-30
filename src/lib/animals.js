import animalsData from '@/data/animals.json';

export const getAllAnimals = () => {
  return animalsData;
};

export const getAnimalById = (id) => {
  return animalsData.find((animal) => animal.id === parseInt(id));
};

export const getFeaturedAnimals = () => {
  return animalsData.slice(0, 4);
};

export const sortAnimalsByPrice = (animals, order = 'asc') => {
  return [...animals].sort((a, b) => {
    return order === 'asc' ? a.price - b.price : b.price - a.price;
  });
};