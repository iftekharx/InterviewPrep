# Objective: Maximize Gold

# Rules
"""
1. Can move in any direction: up, down, left, right
2. Once a path is taken, there is no going back
3. Game ends when no more steps can be taken.
"""

"""
        1
    1 {you}  3
        2
"""

# if you choose 3 it adds up to 3+1+7+2+5 = 18
# so you selected greedily. (highest value)
# and got optimal answer

""" It does not work always for greedy solutions """

# Bulbs problem
""" Given N bulbs, either on (1) or off (0).
    Turning on ith bulb causes all reamining
    bulbs on the right to flip.

    find the min number of switches to turn 
    all the bulbs on.
"""

# [1, 0, 1] cost = 0
# algo:
# if the bulb is on go on (continue), otherwise 
# cost ++ & flip the rest

# [1, 0, 1], [1, 1, 0], [1, 1, 1] cost 2

# time: O(N*N) space: O(1)

# can we optimize this?

# [0, 1, 0, 1, 1, 0, 1, 1]
# [1, 0, 1, 0, 0, 1, 0, 0]
# []

class Solution:

    def bulbs(self, A):
        cost = 0

        for b in A:
            if cost % 2:
                b = b
            else:
                b = not b
            
            if b % 2 == 1:
                continue
            else:
                cost += 1
        return cost
    
if __name__ == "__main__":
    print(Solution().bulbs([0, 1, 0, 1, 1, 0, 1, 1]))