const adminControllers = {
    /* ADMIN */
    admin: (req, res) => res.send('Route for Admin View'),
    create: (req, res) => res.send('Route for Create View'),
    createSend: (req, res) => res.send('Route for create a product from an ID'),
    edit: (req, res) => res.send('Route for Edit View'),
    editSend: (req, res) => res.send('Route for edit a product from an ID'),
    delete: (req, res) => res.send('Route for delete a product from an ID'),
    
    /* AUTH */
    login: (req, res) => res.send('Route for Login View'),
    loginSend: (req, res) => res.send('Route for login a User'),
    register: (req, res) => res.send('Route for Register View'),
    registerSend: (req, res) => res.send('Route for Regsiter a User'),
    logout: (req, res) => res.send('Route for Logout View')
}

module.exports = adminControllers;