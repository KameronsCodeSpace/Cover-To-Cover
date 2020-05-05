const express = require("express");
const router = express.Router();
const usersQueries = require("../queries/users");
const db = require("../db/db");
const {loginRequired} = require("../auth/helpers");

const multer = require('multer');



/* Route to GET all users listing. */
router.get("/", loginRequired, async (req, res, next) => {
   console.log('session req', req.session)
  try {
  const requestQuery = `SELECT * FROM users`
  let allUsers = await db.any(requestQuery);
  console.log("users", allUsers);
  
    res.json({
      payload: allUsers,
      message: `Users request was successfully received`,
      error: false
    });
  } catch (error) {
    res.status(500);
    res.json({
      message: `Unable to retrieve users`,
      error: true
    });
    console.log("error", error);
  }
});

// Route to GET users by ID.
router.get("/:id", async (req, res, next) => {
  
  const params = req.params.id
  try {
    const user = await usersQueries.getUserById(params);
    res.json({
      payload: user,
      message: `User was successfully retrieved`,
      error: false
    });
  } catch (error) {
    res.status(500);
    res.json({
      message: `Unable to retrieve user`,
      error: true
    });
    console.log("err", error);
  }
});

router.get("/user/:username", async (req, res, next) => {
  const username = req.params.username

  console.log('What Name is this', username)
  try {
   
    const user = await usersQueries.getByUsername(username);
  
    res.json({
      payload: user,
      message: `User was successfully retrieved`,
      error: false
    });
  } catch (error) {
    console.log('error', error)
    res.status(500);
    res.json({
      message: `Unable to retrieve user`,
      error: true
    });
  
  }
});

// router.post('/upload', async(req, res, next) => {
//   
//   try {
//       let imgURL = `http://localhost:3100/${userPic.replace('public/', '')}`;
//       const userAvatar = await usersQueries.uploadAvatar(imgURL)
//       if (!req.file) {
//         console.log('req.file:', req.file)
//         console.log("No file received");
//         return res.send({
//         success: false
//       });

//       } else {
//         console.log('file received');
//         res.json({
//           payload: userAvatar,
//           msg: `Avatar successfully uploaded` 
//         })
//         return res.send({
//           success: true
//         })
//       }
//   } catch (error) {
//     console.log('error', error)
//     res.status(500);
//     res.json({
//       message: `Unable to upload avatar`,
//       error: true
//     })
//   }

  
// });


//PATCH to update a a user
router.patch("/:id", loginRequired, async (req, res, next) => {
 
  const id = req.params.id; 
  const username = req.body.username;
  const password = req.body.password;
  const region = req.body.region;
  const info = req.body.info;
  const email = req.body.email;
  const avatar = req.body.email;

  
 if (username) {
  try {
    const update = await usersQueries.updateUsername(id, username)
    res.json({
      payload: update,
      message: `The username was successfully updated`
    });
  } catch (error) {
    res.status(500);
    res.json({
      
      message: `Unable to update username`
    });
    console.log('error', error)
  }
 }
 if (password) {
   try {
      const update = await usersQueries.updatePassword(id, password)
      console.log('params', id)
      res.json({
        payload: update,
        message: `The password was successfully updated`
      });
    } catch (error) {
      res.status(500);
      res.json({
        message: `Unable to update password`
      });
      console.log('error', error)
    }
  }
  if (region) {
   try {
      const update = await usersQueries.updateRegion(id, region)
      console.log('params', id)
      res.json({
        payload: update,
        message: `The region was successfully updated`
     });
    } catch (error) {
      res.status(500);
      res.json({
        message: `Unable to update region`
      });
      console.log('error', error)
    }
  }
  if (email) {
    try {
      const update = await usersQueries.updateEmail(id, email)
      console.log('params', id)
      res.json({
        payload: update,
        message: `The email was successfully updated`
      });
    } catch (error) {
      res.status(500);
      res.json({
        message: `Unable to update email`
      });
      console.log('error', error)
    }
  }
  if (info) {
    try {
      const update = await usersQueries.updateInfo(id, info)
      console.log('params', id)
      res.json({
        payload: update,
        message: `The info was successfully updated`
      });
    } catch (error) {
      res.status(500);
      res.json({
        message: `Unable to update info`
      });
      console.log('error', error)
    }
  }
  if (avatar) {
    try {
      
      const update = await usersQueries.updateAvatar(id, avatar)
      console.log('params', id)
      res.json({
        payload: update,
        message: `The avatar was successfully updated`
      });
    } catch (error) {
      res.status(500);
      res.json({
        message: `Unable to update avatar`
      });
      console.log('error', error)
    }
  }

});

//DELETE Route to delete a user
router.delete("/:id", loginRequired, async (req, res) => {
  let params = req.params.id;

  try {
    const deletedUser = await usersQueries.deleteUser(params)
    res.json({
      payload: deletedUser,
      message: ` Successfully removed user`
    });
  } catch (error) {
    res.status(500);
    res.json({
      message: `Unable to remove user!`
    });
    console.log("err", error);
  }
});

module.exports = router;
