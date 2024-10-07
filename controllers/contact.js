const path = require('path');

exports.getContactUs = (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'contact-us.html'));
};

exports.postContactUs = (req, res, next) => {
    console.log(req.body); // You can access the submitted form data here (name, email)
    res.redirect('/success');
};
