from setuptools import setup
import os
from glob import glob

package_name = 'action_example'

setup(
    name=package_name,
    version='0.0.0',
    packages=[package_name],
    data_files=[
        ('share/ament_index/resource_index/packages',
            ['resource/' + package_name]),
        ('share/' + package_name, ['package.xml']),
        # Include all launch files
        (os.path.join('share', package_name, 'launch'), glob('launch/*launch.[pxy][yma]*')),
    ],
    install_requires=['setuptools'],
    zip_safe=True,
    maintainer='Example Maintainer',
    maintainer_email='example@todo.com',
    description='Example package demonstrating action server and client nodes',
    license='Apache License 2.0',
    tests_require=['pytest'],
    entry_points={
        'console_scripts': [
            'fibonacci_action_server = action_example.fibonacci_action_server:main',
            'fibonacci_action_client = action_example.fibonacci_action_client:main',
        ],
    },
)