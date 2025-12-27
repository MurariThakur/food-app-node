const testUserController = (req,res) => {
    try {
        res.status(200).send('Test user controller is working');
    } catch (error) {
        console.error("Error in testUserController:", error);
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

module.exports = {testUserController};