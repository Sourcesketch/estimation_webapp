import Notification from "../models/notificationModel.js";

// send notification to specific user

const sendNotification = (req, res) => {
  const { senderName, receiptName, projectName, read, count } = req.query;
      const notifi = new Notification({
        senderName: senderName,
        receiptName: receiptName,
        projectName: req.query.projectName,
        read: read,
        count: count,
      });
      notifi
        .save()
        .then((result) => {
          res.send(result);
        })
        .catch((err) => {
          console.log(err);
        });
};

const getNotification = (req, res) => {
  Notification.findOne({ receiptName: req.query.receiptName })
    .select("count -_id")
    .count()
    .then((result) => {
      res.send(result.toString());
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateNotification = (req, res) => {
  Notification.findOneAndUpdate(
    { projectName: req.query.projectName },
    { read: req.body.read },
    { new: true }
  )
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { sendNotification, getNotification, updateNotification };
