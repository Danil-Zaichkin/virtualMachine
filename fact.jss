set 100 1 //factorial_value
set 101 1 //decrement
set 103 1 //flag

input 102
:loop
mul 100 102 100
sub 102 101 102
cmp 102 103
jb :loop

output 100