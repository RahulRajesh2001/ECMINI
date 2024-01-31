import mongoose from 'mongoose'

export const mongoConnect = () => {
  mongoose
    .connect('mongodb://localhost:27017/ECMINI')
    .then((response) => {
      console.log('mongodb connected successfully..')
    })
    .catch((err) => {
      console.error(err)
      console.log('Error occured when db connectiong')
    })
}
