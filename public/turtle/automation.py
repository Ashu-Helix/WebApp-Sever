import shutil
import os

# filePath = os.path.abspath("1")
# print(filePath)
# shutil.make_archive('1', 'zip', './','1')

path = "C://Users//Helixstack//Desktop//Work//06-06//Webapp server 6June//public//turtle"
dir_list = os.listdir(path)
# print(dir_list)

# ignoreArr = ["images","automation.py","56","60","61","87","89","145","172","230"]
ignoreArr = ["code.js","automation.py","multiple.js"]

for x in ignoreArr:
    dir_list.remove(x)

# print(dir_list)

# print(dir_list)
for x in dir_list:
    output_filename = x
    # print(x)
    # if(not os.path.exists(path+"//"+x+".zip")):
    #     print(path+"//"+x)

    shutil.make_archive(output_filename, 'zip', './',output_filename)