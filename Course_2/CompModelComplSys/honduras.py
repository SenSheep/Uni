class Solution:
    def longestCommonPrefix(self, arr1: list[int], arr2: list[int]) -> int:
        pref = []
        for i in arr1:
            i = str(i)
            for g in range(len(i)):
                pref.append(i[:g+1])
        pref = set(pref)

        m = 0
        for i in arr2:
            i = str(i)
            h = 1
            for g in range(len(i)):
                if i[:g+1] in pref:
                    max(h, m)
                    m += 1
                else:
                    break
        return m
a = Solution()
print(a.longestCommonPrefix([1,2,3], [4,4,4]))