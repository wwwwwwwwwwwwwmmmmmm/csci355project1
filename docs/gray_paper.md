# Gray Paper

### Navbar Icons

![img.png](images/img.png)
![img_1.png](images/img_1.png)
![img_2.png](images/img_2.png)

JSX block within a React component that renders a container with two images.
Image component displays an image sourced from the logo import.
Fixed height of 50 pixels, a minimum width of 50 pixels, and an automatic width to maintain its aspect ratio.

### Navbar links

![img_3.png](images/img_3.png)
![img_4.png](images/img_4.png)
![img_5.png](images/img_5.png)

Links inside a list styled to change color and rise when hovered over.

### Navbar Contact Button

![img_6.png](images/img_6.png)
![img_7.png](images/img_7.png)
![img_8.png](images/img_8.png)

Same hover effect as other links but appears different by custom buttonContact class. Redirects to the contact page.

### Menu Items Loading

![img_10.png](images/img_10.png)
![img_11.png](images/img_11.png)
![img_13.png](images/img_13.png)

Uses showImage boolean to determine whether to display the animated loading effect.
If loading then it will display empty divs with css styled loading animation.
After 1000ms delay then it will display the menu items.

### Menu Item

![img_12.png](images/img_12.png)
![img_14.png](images/img_14.png)

Menu Items are arranged in cards representing a menu item. Price on top right, image in middle, and details at the
bottom along with Order Now button.
Each menu item card is generated automatically through generatedMenuItems function based on a list of menu items.

### View All Menu Items

![img_15.png](images/img_15.png)
![img_16.png](images/img_16.png)

View All buttom on homepage that redirects to the menu page. Button is based on default global button css. Menu page
contains all menu items along with pagination.

### Menu Pagination

![img_17.png](images/img_17.png)
![img_18.png](images/img_18.png)
![img_19.png](images/img_19.png)
![img_20.png](images/img_20.png)

In Menu page, there is pagination which allows user to navigate through the menu items. Pagination is generated
automatically based on the number of menu items.
Done through adding pagination component with react props to the menu page that queries menu component based on index of
paginator.
Paginator is a simple list of numbers that when clicked will change the index of the menu component along with next/prev
buttons.

### Footer

![img_21.png](images/img_21.png)
![img_22.png](images/img_22.png)
![img_23.png](images/img_23.png)

Footer added in root layout, adding it to all pages.
Footer contains links to social media, contact us, and other pages.

![img_26.png](images/img_26.png)

Each footer section done using lists and links styled with css.

![img_24.png](images/img_24.png)
![img_25.png](images/img_25.png)
Footer icons are from font awesome library adding to project through npm.

### Reservations

![img_27.png](images/img_27.png)
![img_29.png](images/img_29.png)
![img_28.png](images/img_28.png)
![img_30.png](images/img_30.png)

Found in home page. Uses reservation module.
Allows user to make a reservation by selecting date, time, and number of people.
Forms styled to appear on the right with the Book a Table header on the left.

![img_34.png](images/img_34.png)
![img_33.png](images/img_33.png)

Book Now button used to indicate to submit the form. Styled like the website theme.

![img_31.png](images/img_31.png)
![img_32.png](images/img_32.png)

Automatically adjust width if screen size is less too small so forms wrap nicely.

### Why Choose Us

![img_39.png](images/img_39.png)
![img_38.png](images/img_38.png)
![img_37.png](images/img_37.png)

Another react component for cleanliness.
Aligns each icon item using flex.
Icons is displayed above the text which is a p element.
Uses Font Awesome icons for the icons.

### Customer Reviews

![img_40.png](images/img_40.png)
![img_41.png](images/img_41.png)

Reviews represented by objects with a name, review, and picture of person.

![img_43.png](images/img_43.png)
![img_42.png](images/img_42.png)

Reviews are displayed in a carousel with 3 elements at a time.

![img_44.png](images/img_44.png)
![img_45.png](images/img_45.png)

Cycling through reviews is done through react hook which changes the index of the reviews array.
Review is formatted in the form of image/name/review. Where the non active reviews are hidden with display none.

### Who We Are

![img_46.png](images/img_46.png)

Displays countries relating to our restaurant.

![img_48.png](images/img_48.png)
![img_49.png](images/img_49.png)
![img_50.png](images/img_50.png)

About page is just contains react flag component. Flag component consists of multiple flags with flex display and flex
wrap if screen size is too small.
Shows flag name then flag image.

![img_47.png](images/img_47.png)

When hovered it shows overview of culture of the country in our restaurant.

![img_51.png](images/img_51.png)

Hover done by hidding the div below flag image through translateY 101%. Then shown on hover which translates it to 0.
Hover up effect done through css transition.

### Contact Us

![img_52.png](images/img_52.png)
![img_53.png](images/img_53.png)
![img_54.png](images/img_54.png)

Contact Us is a react component consisting of a form to contact the restaurant.
Has name/email/message text input with email/phone radio buttons and services check boxes aligned using flex and flex
column.

![img_57.png](images/img_57.png)
![img_56.png](images/img_56.png)

Contact Information is its own component using font awesome icons and basic html text.

![img_58.png](images/img_58.png)
![img_59.png](images/img_59.png)
![img_60.png](images/img_60.png)

Our Locations is a component that displays the city/phone/hours of each location.
Done using html tables.