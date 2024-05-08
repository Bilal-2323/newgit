import Menu from "../model/menu.js";


export const getAllData = async (req, res) => {
    try {

        const menuData = await Menu.find();
        if (!menuData) {
            return res.status(404).json({ msg: "User data not found" });
        }
        res.status(200).json(menuData);

    } catch (error) {
        res.status(500).json({ error: error });
    }
}

