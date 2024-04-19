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
    { name: 'Germany', kd_negara: 'DE' },
    { name: 'Russia', kd_negara: 'RU' },
    { name: 'France', kd_negara: 'FR' },
    { name: 'Japan', kd_negara: 'JP' },
    { name: 'Brazil', kd_negara: 'BR' },
    { name: 'Italy', kd_negara: 'IT' },
    { name: 'Canada', kd_negara: 'CA' },
    { name: 'Mexico', kd_negara: 'MX' },
    { name: 'Spain', kd_negara: 'ES' },
    { name: 'Australia', kd_negara: 'AU' },
    { name: 'Turkey', kd_negara: 'TR' },
    { name: 'South Korea', kd_negara: 'KR' },
    { name: 'India', kd_negara: 'IN' },
    { name: 'United Kingdom', kd_negara: 'GB' }
    // Add more countries as needed
];

const harborsData = [
    { ur_pelabuhan: 'Jakarta Harbor', kd_negara: 'ID' },
    { ur_pelabuhan: 'New York Harbor', kd_negara: 'US' },
    { ur_pelabuhan: 'Shanghai Harbor', kd_negara: 'CN' },
    { ur_pelabuhan: 'London Harbor', kd_negara: 'GB' },
    { ur_pelabuhan: 'Vancouver Harbor', kd_negara: 'CA' },
    { ur_pelabuhan: 'Ottawa Harbor', kd_negara: 'CA' },
    { ur_pelabuhan: 'Mexico City Harbor', kd_negara: 'MX' },
    { ur_pelabuhan: 'Madrid Harbor', kd_negara: 'ES' },
    { ur_pelabuhan: 'Santiago Harbor', kd_negara: 'CL' },
    { ur_pelabuhan: 'Buenos Aires Harbor', kd_negara: 'AR' },
    { ur_pelabuhan: 'Lima Harbor', kd_negara: 'PE' },
    { ur_pelabuhan: 'Brasília Harbor', kd_negara: 'BR' },
    { ur_pelabuhan: 'Bogotá Harbor', kd_negara: 'CO' },
    { ur_pelabuhan: 'Quito Harbor', kd_negara: 'EC' },
    { ur_pelabuhan: 'Kabul Harbor', kd_negara: 'AF' },
    { ur_pelabuhan: 'Dhaka Harbor', kd_negara: 'BD' },
    { ur_pelabuhan: 'Algiers Harbor', kd_negara: 'DZ' },
    { ur_pelabuhan: 'Pretoria Harbor', kd_negara: 'ZA' },
    { ur_pelabuhan: 'Tehran Harbor', kd_negara: 'IR' },
    { ur_pelabuhan: 'Kolkata Harbor', kd_negara: 'IN' },
    { ur_pelabuhan: 'Manila Harbor', kd_negara: 'PH' },
    { ur_pelabuhan: 'Taipei Harbor', kd_negara: 'TW' },
    { ur_pelabuhan: 'Tunis Harbor', kd_negara: 'TN' },
    { ur_pelabuhan: 'Khartoum Harbor', kd_negara: 'SD' },
    { ur_pelabuhan: 'Kiev Harbor', kd_negara: 'UA' },
    { ur_pelabuhan: 'Seoul Harbor', kd_negara: 'KR' },
    { ur_pelabuhan: 'Rome Harbor', kd_negara: 'IT' },
    { ur_pelabuhan: 'London Harbor', kd_negara: 'GB' },
    { ur_pelabuhan: 'New Delhi Harbor', kd_negara: 'IN' },
    { ur_pelabuhan: 'Istanbul Harbor', kd_negara: 'TR' },
    { ur_pelabuhan: 'Berlin Harbor', kd_negara: 'DE' },
    { ur_pelabuhan: 'Toronto Harbor', kd_negara: 'CA' },
    { ur_pelabuhan: 'Tokyo Harbor', kd_negara: 'JP' },
    // Add more harbors as needed
];

const stuffData = [
    { hs_code: '12345678', details: ['detail 1', 'detail 2', 'detail 3'] },
    { hs_code: '87654321', details: ['detail A', 'detail B'] },
    { hs_code: '98765432', details: ['detail X', 'detail Y', 'detail Z'] },
    { hs_code: '56789012', details: ['detail M', 'detail N'] },
    { hs_code: '34567890', details: ['detail O'] },
    // Add more stuff data as needed
];

const tariffData = [
    { hs_code: '12345678', rate_bea_masuk: 10 },
    { hs_code: '87654321', rate_bea_masuk: 20 },
    { hs_code: '98765432', rate_bea_masuk: 10 },
    { hs_code: '56789012', rate_bea_masuk: 40 },
    { hs_code: '34567890', rate_bea_masuk: 30 },
]; // Mock tariff rate

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
    const { hs_code = '' } = req.query;
    const filteredTariff = tariffData.filter(tariff => tariff.hs_code.includes(hs_code));
    res.json(filteredTariff);
});



// Start the server
app.listen(PORT, () => {
    console.log(`Mock backend server running on port ${PORT}`);
});
