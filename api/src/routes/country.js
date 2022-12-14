const { Router } = require("express");
const { getById, getByName, getAllCountries } = require("../controllers/countryController");

const router = Router();

router.get("/", getAllCountries);
router.get("/search", getByName);
router.get("/:id", getById);

module.exports = router;
