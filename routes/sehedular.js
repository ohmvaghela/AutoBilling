const express = require("express");
const router = express.Router();
const billSchema = require("../model/billSchema");
const mongoose = require("mongoose");

const findBillsWithExceededReminders = async () => {
    try {
        const exceededReminderBills = await Bill.find({ remdinderDate: { $lt: new Date() } });
        return exceededReminderBills;
    } catch (error) {
        console.error('Error fetching bills with exceeded reminders:', error);
        return [];
    }
};

const sendEmailsForExceededReminders = async () => {
    const exceededReminderBills = await findBillsWithExceededReminders();

    for (const bill of exceededReminderBills) {
        try {
            await axios.get('http://localhost:8000/sendEmail', {
                id: bill.billID,
            });
        } catch (error) {
            console.error('Error sending reminder email for bill ID:', bill.billID, error);
        }
    }
};

const schedular = async () => {
    await sendEmailsForExceededReminders();
};


module.exports = schedular;
