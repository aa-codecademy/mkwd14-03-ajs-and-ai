import Toastify from "./node_modules/toastify/dist/build.js";

Toastify.setOption('delay', 1000);
Toastify.setOption('position', 'top-right');

setTimeout(function () {
    Toastify.success('Success', 'User created successfully!');
}, 1000)

setTimeout(function () {
    Toastify.warning('Success', 'User created successfully!');
}, 2000)

setTimeout(function () {
    Toastify.error('Success', 'User created successfully!');
}, 3000)