class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def splitListToParts(self, head, k):
        l = 0
        curr = head
        while curr:
            l += 1
            curr = curr.next
        g = l // k # general
        m = l % k # mod
        res = []
        h = []
        curr = head

        print(g, m)

        for f in range(k):
            i = 0
            while curr and i < g:
                h.append(curr.val)
                curr = curr.next
                i += 1
            if m != 0 and g > 0:
                h.append(curr.val)
                curr = curr.next
            res.append(h)
            h = []

        return res

a = Solution()
print(a.splitListToParts([1,2,3], 5))