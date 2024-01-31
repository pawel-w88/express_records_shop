import chance from "chance";
import Record from "./models/Record";
import dotenv from "dotenv";
dotenv.config();

const seedRecords = () => {
  Record.countDocuments((err, count) => {
    if (err) {
      console.error("Error checking record count:", err);
      return;
    }

    if (count === 0) {
      const records = [];

      for (let i = 0; i < 10; i++) {
        records.push({
          title: chance.word(),
          artist: chance.name(),
          year: chance.year(),
          cover: chance.url(),
          price: chance.floating({ min: 5, max: 50, fixed: 2 }),
        });
      }

      Record.insertMany(records)
        .then(() => {
          console.log("Records seeded successfully");
        })
        .catch((error) => {
          console.error("Error seeding records:", error);
        });
    }
  });
};
