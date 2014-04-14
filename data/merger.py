# concatenate some stuff from 2 files into a 3rd file

# open 2 existing files, make new file for writing
mystates = open('states.txt')
myabbrevs = open('abbrevs.txt')
F = open('merged_data.txt', 'w')

# things to write into the new file
a = '<option value="'
# b = value
c = '">'
# d = text seen in menu
e = '</option>'

for line in mystates:
	b = myabbrevs.readline()
	b = b.rstrip() # we need .rstrip or else it makes a line break
	d = line.rstrip() # same here
	F.write(a + b + c + d + e + '\n')

# close all files
mystates.close()
myabbrevs.close()
F.close()
