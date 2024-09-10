class Home:

    def __init__(self, area="50м2", price=100):
        self._area = area
        self._price = price

    def final_price(self, discount):
        return self._price - (self._price / 100 * discount)

class Smallhome(Home):

    def __init__(self, price=50):
        self._area = "40м2"
        self._price = price

class Human:
    default_name = "Неизвестно"
    default_age = "Неизвестно"

    def __init__(self, name=default_name, age=default_age):
        self.name = name
        self.age = age
        self.__money = 100
        self.__home = "Нет"

    def info(self):
        print(f"Имя: {self.name}\nВозвраст: {self.age}\nСчет: {self.__money}\nНедвижимость: {self.__home}")

    def default_info(self):
        print(f"Начальное имя: {self.default_name}\nНачальный возвраст: {self.default_age}")

    def earn_money(self):
        self.__money += 100

    def buy_house(self, price):
        if self.__money >= price:
            return ("Yes")
        else:
            return ("No")

    def make_deal(self, dom, discount):
        if Human.buy_house(self, dom.final_price(discount)) == "Yes":
            self.__money -= dom.final_price(discount)
            self.__home = f"Площадь {dom._area}"
        else:
            print("Недостаточно средств")

dom1 = Home("60м2", 100)

sdom1 = Smallhome(20)

ivan = Human("Иван", 20)

ivan.make_deal(sdom1, 10)

ivan.info()
