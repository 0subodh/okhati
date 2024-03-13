const asyncHandler = require('express-async-handler');

exports.editHours = asyncHandler(async (req, res) => {
  const { day, open, close } = req.body;

  if (!day || !open || !close) {
    return res
      .status(400)
      .json({ error: 'Invalid request. Please provide day, open, and close.' });
  }
  await OpeningHours.findOneAndUpdate(
    { day },
    { open, close },
    { upsert: true }
  );
  res.json({ message: 'Opening hours updated successfully.' });
});

exports.showHours = asyncHandler(async (req, res) => {
  const today = new Date();
  const currentDay = today.toLocaleDateString('en-US', {
    weekday: 'lowercase',
  });
  const openingHours = await OpeningHours.findOne({ day: currentDay });
  res.json({ openingHours: openingHours || 'Closed' });
});
