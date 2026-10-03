def on_button_pressed_a():
    if randint(0, 10) > 5:
        basic.show_leds("""
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            """)
    else:
        pass
input.on_button_pressed(Button.A, on_button_pressed_a)
