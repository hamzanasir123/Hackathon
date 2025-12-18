from setuptools import setup
import os
from glob import glob

package_name = 'publisher_subscriber_example'

setup(
    name=package_name,
    version='0.0.0',
    packages=[package_name],
    data_files=[
        ('share/ament_index/resource_index/packages',
            ['resource/' + package_name]),
        ('share/' + package_name, ['package.xml']),
    ],
    install_requires=['setuptools'],
    zip_safe=True,
    maintainer='Example Maintainer',
    maintainer_email='example@todo.com',
    description='Example package demonstrating publisher and subscriber nodes',
    license='Apache License 2.0',
    tests_require=['pytest'],
    entry_points={
        'console_scripts': [
            'talker = publisher_subscriber_example.publisher_member_function:main',
            'listener = publisher_subscriber_example.subscriber_member_function:main',
        ],
    },
)