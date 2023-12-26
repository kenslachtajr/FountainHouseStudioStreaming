# ui-kit-util

This library contains any utils used for ui components.
Feel free to use outside of the UI lib as well. Util descriptions are found below.

## CN

The cn helper should be used whenever creating classes with tailwind.
This helper uses the following packages.

tailwind-merge:

- merges tailwind classes together
- removes duplicates or clashing classes.
- The later classes will stay in the string.

clsx:

- handles conditional classes

## Prettify Type

This type is used to combined multiple types together and pretty print them.

> This could be moved to a different lib eventually since its not really UI Kit specific.

## TWX

This is a twc wrapper that uses the cn function since twc doesn't do this out of the box.
Please stick to using twx over twc as mentioned in the docs.
