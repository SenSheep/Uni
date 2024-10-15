class Solution:
    def smallestChair(self, times: list[list[int]], tF: int):
        tt = times[tF]
        t = sorted(times)
        ch = [0]
        for i in t:
            f = 0
            for g in range(len(ch)):
                if i[1] <= ch[g]:
                    ch[g] = t[0]
                    f = 1
                    break
            if f == 0:
                ch.apppend(t[0])
                if tt == i:
                    return ch[g]
            if tt == i:
                return ch[g]
        
        return ''


