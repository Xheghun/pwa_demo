var pets = [
    {
        "id": 1001,
        "name": "Developing Flutter Apps",
        "description": "In this lesson you'll learn how to build mobile applications using Google's latest technology for building apps",
        "price": 500,
        "image": "https://miro.medium.com/max/3356/1*-6WdIcd88w3pfphHOYln3Q.png",
        "count": 4,
        "rating": 4,
        "location": "London",
        "cart_amount": 0,
    },
    {
        "id": 1002,
        "name": "Augmented Reality with Unity",
        "description": "learning how to build augmented reality projects with Unity and Vuforia, no previous experience required.",
        "price": 372,
        "image": "https://www.blippar.com/uploads/images/_flexL/Augmented-reality-tutorial-Augmented-reality-3D-models-Blippar.jpg",
        "count": 3,
        "rating": 3,
        "location": "New York",
        "cart_amount": 0,
    },
    {
        "id": 1003,
        "name": "Introduction to Cloud Computing",
        "description": "learn the basics of cloud computing building real world projects using Amazon Web Services",
        "price": 126,
        "image": "https://specials-images.forbesimg.com/imageserve/5f9fa9e815da35da1356a28b/960x0.jpg",
        "count": 12,
        "rating": 4,
        "location": "Manchester",
        "cart_amount": 0,
    },
    {
        "id": 1004,
        "name": "Android Application Development",
        "description": "Learn how to build native android applications using Kotlin",
        "price": 289,
        "image": "https://technofaq.org/wp-content/uploads/2018/08/android-app-development-620x350.jpg",
        "count": 6,
        "rating": 5,
        "location": "Abu Dhabi",
        "cart_amount": 0,
    },
    {
        "id": 1005,
        "name": "PHP 7 Beginner to Advance",
        "description": "Learn the fundametals of php along with new features added to php 7",
        "price": 637,
        "image": "https://blog.templatetoaster.com/wp-content/uploads/2018/10/The-Ultimate-Guide-to-PHP-7-Facebook.png",
        "count": 2,
        "location": "Sydney",
        "rating": 4,
        "cart_amount": 0,
    },
    {
        "id": 1728,
        "name": "Unity 3D Game Tutorial",
        "description": "learn the basics of unity",
        "price": 425,
        "image": "https://anadea.info/uploads/image_attachment/image/1109/Unity-3d.jpg",
        "count": 23,
        "location": "Moscow",
        "rating": 3,
        "cart_amount": 0,
    },
    {
        "id": 1736,
        "name": "Unity 3D Advance",
        "description": "Advance game development tutorial with Unity",
        "price": 567,
        "image": "https://anadea.info/uploads/image_attachment/image/1109/Unity-3d.jpg",
        "count": 14,
        "location": "Moscow",
        "rating": 4,
        "cart_amount": 0,
    },
    {
        "id": 3822,
        "name": "3D Modeling with Blender",
        "description": "Create 3D models using blender and unity",
        "price": 736,
        "image": "https://truetech-company.com/images/ca/3d-banner.c96a899ae0295fd591059d3fd5cbb2ad1859.jpg",
        "count": 23,
        "location": "Moscow",
        "rating": 3,
        "cart_amount": 0,
    },
    {
        "id": 3672,
        "name": "Rest API Adavnce",
        "description": "in this tutorial, you'll learn how create restful apis using javascript, NodeJS and MongoDB with some advance techniques.",
        "price": 1282,
        "image": "https://nordicapis.com/wp-content/uploads/Building-a-RESTful-API-Using-Node.JS-and-MongoDB.png",
        "count": 23,
        "location": "Moscow",
        "rating": 5,
        "cart_amount": 0,
    },
    {
        "id": 2732,
        "name": "Rest API",
        "description": "in this tutorial, you'll learn how create restful apis using javascript, NodeJS and MongoDB",
        "price": 1000,
        "image": "https://nordicapis.com/wp-content/uploads/Building-a-RESTful-API-Using-Node.JS-and-MongoDB.png",
        "count": 23,
        "location": "Moscow",
        "rating": 2,
        "cart_amount": 0,
    },
    {
        "id": 3732,
        "name": "Server Side Java Programing",
        "description": "in this tutorial, you'll learn how backend applications using java and Spring MVC",
        "price": 2038,
        "image": "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/104451108/original/6f0e363138be8794e279db1e53fe3f2808ec83b5/do-server-side-java-development.png",
        "count": 13,
        "location": "Lagos",
        "rating": 5,
        "cart_amount": 0,
    },
    {
        "id": 3372,
        "name": "Vloging Advaance",
        "description": "take your vloging skills to the next level, with our advance vloging lesson.",
        "price": 1500,
        "image": "https://newskillsacademy.com/wp-content/uploads/2017/12/vlogging-diploma.jpg",
        "count": 3,
        "location": "Moscow",
        "rating": 3,
        "cart_amount": 0,
    },
    {
        "id": 882,
        "name": "Strategic Management for E-Commerce",
        "description": "build a successful e-commerce startup by implementing the ideas in this lesson",
        "price": 373,
        "image": "images/strategy.jpg",
        "count": 17,
        "location": "Moscow",
        "rating": 4,
        "cart_amount": 0,
    },
];

function dismissModal() {
    var cartContent = document.getElementById('cartContent');
    bootstrap.Modal.getInstance(cartContent).hide();
}


var fluffyApp = new Vue({
    el: "#fluffy",
    data: {
        storename: 'My Fluffy',
        pets: pets,
        cart: [],
        phone: "",
        fullname: "",
        address: "",
        sortBy: "asc",
        orderBy: "name"
    },
    methods: {

        addToCart(pet, index) {
            this.cart.push(pet);
            this.sortedList[index].count--;
            this.sortedList[index].cart_amount++;
        },


        placeOrder() {
            this.cart = [];
            dismissModal();
            alert("Your order has been submitted");

            //reload page
            window.location.replace("index.html");
        },

        canOrder() {
            if (this.fullname === "" || this.phone === "" || this.address === "")
                return false;

            return true;
        },

        canAdd(pet) {
            return (pet.count > 0);
        },

        hasItem() {
            return this.cart.length > 0;
        },

        removeFromCart(index) {
            --this.pets[index].cart_amount;
            ++this.pets[index].count;
            this.cart.splice(index, 1);


            //dismiss modal when there are no more content in the cart 
            if (this.cart.length < 1) {
                dismissModal();
            }
        }

    },

    computed: {

        cartCount() {
            return this.cart.length;
        },


        sortedList() {
            let orderBy = this.orderBy;
            let sortBy = this.sortBy;


            let list = this.pets.slice(0);

            if (orderBy === 'count') {
                function compare(a, b) {
                    if (a.count > b.count) {
                        return sortBy == 'asc' ? 1 : -1;
                    } else {
                        return sortBy == 'asc' ? -1 : 1;
                    }
                }
                return list.sort(compare);
            } else if (orderBy === 'rating') {
                function compare(a,b) {
                    if(a.rating > b.rating) {
                        return sortBy == 'asc' ? 1 : -1;
                    } else {
                        return sortBy == 'asc' ? -1 : 1;
                    }
                }
                return list.sort(compare);
            }

            else if (orderBy === 'price') {
                function compare(a, b) {
                    if (a.price > b.price) {
                        return sortBy == 'asc' ? 1 : -1;
                    } else {
                        return sortBy == 'asc' ? -1 : 1;
                    }
                }
                return list.sort(compare);
            } else {
                function compare(a, b) {
                    if (a.name.substring(0, 1) > b.name.substring(0, 1)) {
                        return sortBy == 'asc' ? 1 : -1;
                    } else {
                        return sortBy == 'asc' ? -1 : 1;
                    }
                }
                return list.sort(compare);
            }
        }
    }
});