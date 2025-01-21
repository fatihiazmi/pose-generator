// Array of pose image URLs
const poses = [
  "images/pose1.png",
  "images/pose2.png",
  "images/pose3.png",
  "images/pose4.png",
  "images/pose5.png",
  "images/pose6.png",
  "images/pose7.png",
  "images/pose8.png",
];

const poseImage = document.getElementById("poseImage");
const generatePoseButton = document.getElementById("generatePose");

// Function to generate a random pose
function generateRandomPose() {
  const randomIndex = Math.floor(Math.random() * poses.length);
  const randomPose = poses[randomIndex];

  // Update the image source and make it visible
  poseImage.src = randomPose;
  poseImage.style.display = "block";
  placeholderText.style.display = "none";
}

// Attach event listener to the button
generatePoseButton.addEventListener("click", generateRandomPose);
