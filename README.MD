Guide to editing Memory matching game tips

There are a two noteworthy components that make up this game

- Modals: These are the pop-up screens that are displayed to show a tip or the instructions
- Game code: The "clickCard" Function and the waterConservationTips list will need to be updated
  if edits are made to the tips

Steps to replace a tip:

1. Update the Modal for the tip in both the HTML and Javascript file.

- first update the code which is located at the top of the Javascript file
  EXAMPLE:
  // 1. New tip
  const modalNewTip = document.querySelector('.modal-newName');

- Next, find the modal in the html code.
update the class name to the newName made in .querySelector('.newName'), the img source to the new image,
as well as the content wanted in header 3 and the paragraph. Or if you wanted a video instead of a picture
in the pop-up this is where it would get updated
EXAMPLE:
'''
<dialog class="modal modal-newName">
        <img src="yourNewImage.jpg" alt="Name of image" />
        <h3>New Header here</h3>
        <p>
          New description here
        </p>
        <button class="close-button">
          <h4>close</h4>
        </button>
      </dialog>
 '''

2. Update the list of tips in the Javascript file.

- find the list of tips in the javascript code and update the tip
  EXAMPLE:

  const waterConservationTips = [
  {// 1.
  image: "NewImageName.jpg",
  name: 'NewTip'
  }
  ]

3. find the clickCard function and update the switch case

- change the case name to the name made in step 2, and then update the modal name.
  Example: The following code is found in the click card function

          switch(firstPick.dataset.tipname){
            case 'NewTip':
              modalnewTip.showModal();
              break;
