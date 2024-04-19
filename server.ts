import express from "express";
import cors from "cors";


const app = express();
const PORT = 3000;
app.use(cors());


// Mock data
const countriesData = [
    { name: 'Indonesia', kd_negara: 'ID' },
    { name: 'United States', kd_negara: 'US' },
    { name: 'China', kd_negara: 'CN' },
    // Add more countries as needed
];

const harborsData = [
    { ur_pelabuhan: 'Jakarta Harbor', kd_negara: 'ID' },
    { ur_pelabuhan: 'New York Harbor', kd_negara: 'US' },
    { ur_pelabuhan: 'Shanghai Harbor', kd_negara: 'CN' },
    // Add more harbors as needed
];

const stuffData = [
    { hs_code: '12345678', details: ['detail 1', 'detail 2', 'detail 3'] },
    { hs_code: '87654321', details: ['detail A', 'detail B'] },
    // Add more stuff data as needed
];

const tariffData = { rate_bea_masuk: 10 }; // Mock tariff rate

// Endpoint to get countries data
app.get('/negara', (req, res) => {
    const { ur_negara = '' } = req.query;
    const filteredCountries = countriesData.filter(country => country.name.toLowerCase().includes(ur_negara.toLowerCase()));
    res.json(filteredCountries);
});

// Endpoint to get harbors data
app.get('/pelabuhan', (req, res) => {
    const { kd_negara = '', ur_pelabuhan = '' } = req.query;
    const filteredHarbors = harborsData.filter(harbor => harbor.kd_negara === kd_negara && harbor.ur_pelabuhan.toLowerCase().includes(ur_pelabuhan.toLowerCase()));
    res.json(filteredHarbors);
});

// Endpoint to get stuff data
app.get('/barang', (req, res) => {
    const { hs_code } = req.query;
    const stuff = stuffData.find(item => item.hs_code === hs_code);
    if (stuff) {
        res.json([stuff]);
    } else {
        res.status(404).send('Stuff not found');
    }
});

// Endpoint to get tariff data
app.get('/tarif', (req, res) => {
    res.json(tariffData);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Mock backend server running on port ${PORT}`);
});
