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
# optimized solution
"""
[0, 1, 0, {1, 1, 0, 1, 1}] -> [1, 0, 1, 0, 0, 1, 0, 0]
                         -> [1, 1, 0, 1, 1, 0, 1, 1]
[1, 1, 0, {1, 1, 0, 1, 1}] repeated.
if you 2 flips everything on the right side becomes flipped 
again. reverted to original states.

"""
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

"""
Highest Product problem.
Given an array of N integers. Find the highest product
by multiplying 3 elements.

Input: [1, 2, 3, 4]
Out: 2 * 3 * 4 = 24

take the highest 3 elements
it will not work for negative elements in array
even if it is sorted.

"""
#  first test case: take the highest 3 elements
#  remaining test case: consider lowest 2 & highest 1

class Solution2:
    def maxp3(self, A):
        A = sorted(A)

        hi3 = A[-1] * A[-1] * A[-3]
        lo2hi1 = A[0] * A[1] * A[-1]

        return max(hi3, lo2hi1)
    
if __name__ == "__main__":
    print(Solution2().maxp3([5, 4, 3, 2, -1, -10, 10]))


"""
Activity selection problem
Given n activities with their start and finish times.
Select the maximum number of activities that can be performed 
by a single person, assuming that a person can only work on 
a single activity at a time.
"""

"""
Activity         A1       A2      A3     A4     A5    A6
Start             0        3       1     5      5      8
Finish            6        4       2     9      7      9
"""

# step1: sort the activities according to their finishing
# time.

#sorted
"""
Activity         A3       A2      A1     A5     A6    A4
Start             1        3       0     5      8      5
Finish            2        4       6     7      9      9
"""

# step2:  Select the first activity from the sorted array
# and print it
# A3

# step3: If the start time of next activity is greater than or equal
# to the finish time of previously selected activity then select this
# activity and print it.
# A3 -> A2 -> A5 -> A6
# Total : 4 activities


