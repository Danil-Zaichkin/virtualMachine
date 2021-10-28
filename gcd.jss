input 100
input 101

set 102 0


:loop
cmp 100 102
je ::result
cmp 101 102
je ::result

cmp 100 101
jb ::label1
jl ::label2

:label1
sub 100 101 100
jmp ::goloop

:label2
sub 101 100 101

:goloop
jmp ::loop

:result
add 100 101 100
output 100
