# COA-Take-home_challenge
#### Interactive Photo Gallery & Coding Challenges

This repository contains my solution to the Interactive Photo Gallery and the two coding challenges as part of the coding assessment.

### Interactive Photo Gallery

The interactive photo gallery is implemented using HTML, CSS, and JavaScript. It adapts seamlessly to different screen sizes and devices, matching the provided Figma design provided.
### Project structure
```bash
COA-Take-home_challenge/
└── photo_Gallery/                 # Directory for gallery images
    ├── index.html           # HTML file for the interactive photo gallery
    ├── styles
    | └── styling.css    # CSS file for styling the gallery
    |──images/                 # Directory for gallery images
    |── script
      └── styling.css   # JavaScript file for gallery functionality
|
└── challenges/                 # Directory for gallery images

    ├── arrayMap.js          # JavaScript file for the solution to Challenge 1
    ├── stringTransform.js   # JavaScript file for the solution to Challenge 2
│
├── README.md            # README file with setup instructions and explanations

```

#### Setup Instructions:

1. Clone the repository to your local machine:
    ```
    git clone https://github.com/NiyonshutiDavid/COA-Take-home_challenge.git
    ```

2. Open `index.html` in your preferred web browser to view the interactive photo gallery.

#### Features:

- Responsive design for desktop and mobile views.
- Hover interaction to display additional details when hovering over a photo.
- Cross-browser compatibility ensured for Chrome, Firefox, Safari, and Edge.
![image](https://github.com/NiyonshutiDavid/COA-Take-home_challenge/assets/144002340/e97d5e6a-b085-4395-aff5-95bcd0c0d9a8)


### Coding Challenges

#### Challenge 1: Array Manipulation (arrayMap.js)

The goal of this challenge is to determine if there exists a contiguous subarray within the given array that sums up to the target.

#### Challenge 2: String Transformation (stringTransform.js)

In this challenge, the string is transformed based on certain rules depending on its length.

#### Setup Instructions:

1. Ensure you have Node.js installed on your machine.

2. Run the JavaScript files using Node.js:
    ```
    node arrayMap.js
    node stringTransform.js
    ```

#### Solutions:

- **Challenge 1:** The `hasContiguousSubarray` function in `arrayMap.js` returns `true` if a contiguous subarray with the target sum exists, otherwise `false`.
  
- **Challenge 2:** The `transformString` function in `stringTransform.js` applies transformations to the given string based on its length.

### Repository Structure:

- **index.html**: HTML file for the interactive photo gallery.
- **styles.css**: CSS file for styling the gallery.
- **script.js**: JavaScript file for gallery functionality.
- **arrayMap.js**: JavaScript file for the solution to Challenge 1.
- **stringTransform.js**: JavaScript file for the solution to Challenge 2.

#### Author:

[David Niyonshuti](https://github.com/NiyonshutiDavid)
