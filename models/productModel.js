const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: false,
        },
        imageURL: {
            type: String,
            required: false,
        },
        description: {
            type: String,
            required: true,
        },
        size: {
            type: String,
            required: false,
        },
        price: {
            type: Number,
            required: true,
        },
        
        color: {
            type: String,
            required: false,
        }
        
    },
    {
        timestamps: true
    }
)


const Product = mongoose.model('Product', productSchema);

module.exports = Product;