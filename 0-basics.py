#1. PRINT ALL THE INTERGERS FROM 1 to 255
print("Problem One.")

for x in range(0, 255):
    print(x)
    

#2. PRINT SUM 0 - 255 
print("Problem Two.")
sum = 0
for x in range(0, 255):
    sum = sum + 1
    print(x)

#3. FIND AND PRINT MAX
print("Problem Three.")

alist = [10, 1001, 3]
max = alist[0]

def print_largest(list):
    for i in range(1, len(list),1):
        if list[i] > max:
            max = list[i]
            print(max)
print_largest(alist)

            
#4. ARRAY WITH ODDS
print("Problem Four.")
def listWithOdds():
    oddList = []
    for i in range(1,256,2):
        oddList.append(i)
        print(oddList)
listWithOdds()

#5. GREATER THAN Y
print("Problem Five.")

listFive = [10, 2, 5, 1, 13]
num = 9

def greaterThanY(list,y):
    count = 0
    for i in range(0,len(list), 1):
        if list[i] > y:
            count+=1
            return count
greaterThanY(listFive, num)

#6. MAX, MIN, AVG
print("Problem Six.")

listMaxMinAvg = [88, 77, 100, 101, 343, 888]

def maxMinAvg(list):
    max = list[0]
    min = list[0]
    sum = 0
    avg = 0
    
    for i in range(0, len(list),1):
        sum += list[i]
        
        if list[i] < min:
            min = list[i]
        if list[i] > max:
            max = list[i]   
            
        avg = sum / len(list)-1
    
    return max, min, avg
maxMinAvg(listMaxMinAvg)

#7. SWAP STRING FOR NEG VALUES
print("Problem Seven")
negList = [-5, 10, -9, -1, 44]

def swapNegatives(list):

    for i in range (0,len(list),1):
        if list[i] < 0:
            list[i] = 'replaced'
            return list

swapNegatives(negList)

#9. ITERATE EA AND PRINT
print("Problem Nine.")

iterateList = [9,8,7,6,5,100,1]

for x in iterateList:
    print(x)
    

#10. SQUARE EACH
print("Problem Ten.")

squareValuesList = [9,8,7,6,5,11,1]
def squareEachVal(list):
    for i in range(0, len(list), 1):
        list[i] = list[i]*list[i]
        return list

squareEachVal(squareValuesList)

#11. NEG TO ZERO
print("Problem 11.")

listEleven = [-2, 9, -99, - 77, 8] 

def zeroOutNegVal(list):
    for i in range(0, len(list),1):
        if list[i]< 0:
            list[i] = 0
            return list
        
zeroOutNegVal(listEleven)

#12. FIRST VAL DROP, SHIFT all +1, LAST VAL to ZERO
print("Problem 12")

shiftList = [1,3,6,8,9,10]

def shiftListValOneUp(list):
    i = 0
    for i in range(0, len(list), 1):
        list[i] = list[i+1]
        list[len(list)-1] = 0
        return list
    
shiftListValOneUp(shiftList)











