const adminControllers = {
    admin: (req, res) => res.send('Route for Admin View'),
    create: (req, res) => res.send('Route for Create View'),
    createSend: (req, res) => res.send('Route for create a product from an ID'),
    edit: (req, res) => res.send('Route for Edit View'),
    editSend: (req, res) => res.send('Route for edit a product from an ID'),
    delete: (req, res) => res.send('Route for delete a product from an ID'),
    
}

module.exports = adminControllers;