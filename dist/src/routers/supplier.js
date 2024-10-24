"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const supplier_1 = require("../controllers/supplier");
const router = (0, express_1.Router)();
router.get('/', supplier_1.getSuppliers);
router.post('/get-export-data', supplier_1.getExportData);
router.post('/add-new', supplier_1.addNew);
router.put('/update', supplier_1.updateSupplier);
router.delete('/remove', supplier_1.removeSupplier);
router.get('/get-form-supplier', supplier_1.getForms);
exports.default = router;
//# sourceMappingURL=supplier.js.map